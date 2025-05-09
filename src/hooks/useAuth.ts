import { useAppSelector } from '@/redux/store/hook'

export const useAuth = () => {
	const user = useAppSelector((state) => state.auth.user)
	const accessToken = useAppSelector((state) => state.auth.accessToken)
	return { user, accessToken }
}
