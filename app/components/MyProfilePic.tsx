import Image from "next/image"

const MyProfilePic = () => {
  return (
    <section className="w-full mx-auto">
        <Image
            className="mx-auto mt-8 border-4 border-black rounded-full dark:border-slate-500 drop-shadow-xl shadow-black"    
            src="/images/avatardk1.png"
            alt="Avatar of the author"
            width={200}
            height={200}
            priority={true}
        />
    </section>
  )
}

export default MyProfilePic