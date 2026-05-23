// English locale layout — wraps Nextra Layout with lang="en".
import { LangLayoutShell } from '../components/LangLayoutShell'

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <LangLayoutShell lang="en">{children}</LangLayoutShell>
}
