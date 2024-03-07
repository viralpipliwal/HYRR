import z from "zod";
import User from "../db/models/userModel.js";

const emailSchema = z.string().email();
const passwordSchema = z
  .string()
  .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/);

export default async function (req, res) {
  const { user, email, password } = req.body;
  if (
    !emailSchema.safeParse(email).success ||
    !passwordSchema.safeParse(password).success
  )
    return res.status(400).json({ message: "Invalid email or password" });

  if (await User.findOne({ email }))
    return res.status(400).json({ messsage: "Email already exists" });

  // if (await User.findOne({ user }))
    // return res.status(400).json({ message: "Username already exists" });

  const newUser = new User({
    user,
    email,
    password,
  });
  await newUser.save();

  res.status(201).json({
    message: "User created",
  });
}
