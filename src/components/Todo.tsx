import { ArrowRightOnRectangleIcon, ShieldCheckIcon } from "@heroicons/react/24/solid"
import { useMutateAuth } from '../hooks/useMutateAuth'


export const Todo = () => {
  const { logoutMutation } = useMutateAuth()
  const logout = async () => {
    await logoutMutation.mutateAsync({
      email: "user12@test.com",
      password: ""
    })
  }
  return (
    <div>
      <ArrowRightOnRectangleIcon
        onClick={logout}
        className="h-6 w-6 my-6 text-blue-600 cursor-pointer"
      />
    </div>
  )
}
