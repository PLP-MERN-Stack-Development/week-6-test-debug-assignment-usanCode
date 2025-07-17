
// server/tests/unit/authMiddleware.test.js
const jwt = require('jsonwebtoken');
const authMiddleware = require('../../src/middleware/authMiddleware');

describe('authMiddleware', () => {
  it('should call next() if token is valid', () => {
    const req = {
      headers: {
        authorization: 'Bearer valid-token',
      },
    };
    const res = {};
    const next = jest.fn();

    // Mock jwt.verify to return a fake user
    jest.spyOn(jwt, 'verify').mockReturnValue({ id: '123' });

    authMiddleware(req, res, next);

    expect(req.user).toEqual({ id: '123' });
    expect(next).toHaveBeenCalled();
  });

  it('should return 401 if no token is provided', () => {
    const req = { headers: {} };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const next = jest.fn();

    authMiddleware(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ error: 'Unauthorized: No token provided' });
  });

  it('should return 403 if token is invalid', () => {
    const req = {
      headers: {
        authorization: 'Bearer invalid-token',
      },
    };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const next = jest.fn();

    // Mock jwt.verify to throw
    jest.spyOn(jwt, 'verify').mockImplementation(() => {
      throw new Error('Invalid token');
    });

    authMiddleware(req, res, next);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({ error: 'Unauthorized: Invalid token' });
  });
});
