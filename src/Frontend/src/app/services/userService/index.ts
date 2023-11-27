import { validate } from "./validateToken"
import { findById } from "./findById"
import { findByEmail } from "./findByEmail"


export const userService = {
  validate,
  findById,
  findByEmail,
}
