import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header ", className)}>
      <Link href='/' className="flex items-center gap-1 text-2xl md:flex-1">
        <Image 
          src="/assets/icons/logo-icon.svg"
          alt="Logo with name"
          width={32}
          height={32}
        />
        <p className='hidden md:block'>CollabWrite</p>
      </Link>
      {children}
    </div>
  )
}

export default Header