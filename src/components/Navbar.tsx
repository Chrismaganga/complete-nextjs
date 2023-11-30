import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"

const Navbar = () => {
    return (
        <div className='bg-white sticky z-50 top-0 inset-x-0 h-16'>
        <header className='relative bg-white'>
          <MaxWidthWrapper>
            <div className='border-b border-gray-200'>
              <div className='flex h-16 items-center'>
               {/* mobileNav */}
  
                <div className='ml-4 flex lg:ml-0'>
                 
                </div>
  
                <div className='hidden z-50 lg:ml-8 lg:block lg:self-stretch'>
                  {/* NavItems  */}
                </div>
  
                <div className='ml-auto flex items-center'>
                 
                        Sign in
                      
                 
  
                    
                    
                    <div className='ml-4 flow-root lg:ml-6'>
                      {/* <Cart /> */}
                    </div>
                  </div>
                </div>
              </div>
            
          </MaxWidthWrapper>
        </header>
      </div>
    )
  }
  
  export default Navbar