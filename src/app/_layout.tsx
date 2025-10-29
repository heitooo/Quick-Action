import { useQuickActionRouting } from 'expo-quick-actions/router'
import { Slot } from 'expo-router'

export default function Layout() {
	useQuickActionRouting()
	return <Slot />
}
