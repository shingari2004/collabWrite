import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header ", className)}>
      <Link href='/' className="flex items-center gap-1 text-2xl md:flex-1">
        <Image 
          src="/assets/images/logo.png"
          alt="Logo with name"
          width={40}
          height={40}
        />
        <p className='hidden md:block'>CollabWrite</p>
      </Link>
      {children}
    </div>
  )
}

export default Header