import { FormWrapper } from "./FormWrapper"

type UserData = {
    firstName: string
    lastName: string
    age: string
}

type UserFormsProps = UserData & {
    updateFields: (fields: Partial<UserData>) => void
}

export function UserForm({ firstName, lastName, age, updateFields}: UserFormsProps) {
    updateFields({ firstName: "Kyle", lastName: 'Cook'})
  return (
    <FormWrapper title="User Details">
      <label>First Name</label>
      <input type='text' autoFocus required value={firstName}/>
      <label>Last Name</label>
      <input type='text' required value={lastName}/>
      <label>Age</label>
      <input type='number' required min={1} value={age} />
    </FormWrapper>
  )
}
