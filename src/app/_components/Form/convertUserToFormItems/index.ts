import { User } from "@/domains/User/types"

export const convertUserToFormItems = (user: User) => {
  return [
    {
      label: "Name",
      name: "name",
      value: user.name,
    },
    {
      label: "Email",
      name: "email",
      value: user.email,
    },
    {
      label: "Phone",
      name: "phone",
      value: user.phone,
    },
    {
      label: "Postal Code",
      name: "postalCode",
      value: user.address.postalCode,
    },
    {
      label: "Prefecture",
      name: "prefecture",
      value: user.address.prefecture,
    },
    {
      label: "City",
      name: "city",
      value: user.address.city,
    },
    {
      label: "Street",
      name: "street",
      value: user.address.street,
    },
  ]
}
