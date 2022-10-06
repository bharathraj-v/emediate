import Link from "next/link"

const Footer = () => (
    <footer class="p-4 shadow md:flex md:items-center md:justify-between md:p-6 bg-opacity-70 bg-gray-800">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 E-Mediate™. Built by Bharath Raj
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li  className="mr-4 hover:underline md:mr-6 ">
            <Link href="http://www.linkedin.com/in/bharathraj-v">Linkedin</Link>
        </li>
        <li className="mr-4 hover:underline md:mr-6">
            <button onClick={()=>{window.open('mailto:bharathrajpalivela@gmail.com','_self')}} >Contact Me</button>
        </li>
        <li  className="mr-4 hover:underline md:mr-6">
            <Link href="http://www.github.com/bharathraj-v">Follow on Github</Link>
        </li>
        <li className="hover:underline">
            <Link href="https://github.com/bharathraj-v/emediateloc">Github Repo</Link>
        </li>
    </ul>
</footer>
)

export default Footer