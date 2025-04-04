import jwt from 'jsonwebtoken';  // ES module import

// Middleware to check authentication and authorization for profile access
const authMiddleware = (req, res, next) => {
  // Get the token from the Authorization header
  const token = req.headers.authorization?.split(' ')[1]; // Authorization: Bearer <token>

  // If no token is provided, return Unauthorized status
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized, no token provided' });
  }

  try {
    // Verify the token using the JWT secret
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the decoded user information (e.g., userId) to the request object
    req.userId = decoded.userId;

    // If this is a profile-related route (e.g., GET /profile, PUT /profile),
    // ensure that the user can only access or update their own profile
    if (req.method === 'GET' || req.method === 'PUT') {
      // If the user is trying to access/update a profile, check if they are the correct user
      if (req.params.userId && req.params.userId !== req.userId.toString()) {
        return res.status(403).json({ error: 'Forbidden, you can only access your own profile' });
      }
    }

    // Proceed to the next middleware or route handler
    next();
  } catch (err) {
    // Handle specific JWT errors
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token has expired' });
    }

    // Handle other errors (e.g., invalid token)
    return res.status(401).json({ error: 'Invalid token' });
  }
};

// Export the middleware using ES module syntax
export default authMiddleware;
