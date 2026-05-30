// Suspense fallback for /en doc route transitions.
// Nav/sidebar (from the layout) stay; only the content area shows the spinner.
import { LoadingScreen } from '../components/LoadingScreen'

export default function Loading() {
  return <LoadingScreen label="Loading…" />
}
