import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "default_secret";

export interface ContactData {
    name: string;
    email: string;
    phone: string;
    category: string;
    message: string;
}

export function signToken(data: ContactData): string {
    // Token expires in 24 hours
    return jwt.sign(data, SECRET, { expiresIn: "24h" });
}

export function verifyToken(token: string): ContactData | null {
    try {
        const decoded = jwt.verify(token, SECRET) as ContactData;
        return decoded;
    } catch (error) {
        console.error("Token verification failed:", error);
        return null;
    }
}
