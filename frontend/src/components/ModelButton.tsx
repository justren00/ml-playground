interface ModelButtonProps {
    title: string;
    link: string;
}

function ModelButton({
    title,
    link
}: ModelButtonProps) {

    return (
        <div className="
            inline-flex 
            items-center 
            justify-center 
            rounded-full 
            border 
            border-black 
            px-6 
            py-2 
            bg-gradient-to-r 
            from-white 
            to-violet-300 
            shadow-sm
            transition-all
            duration-200
            hover: shadow-sm
            hover:scale-103
            cursor-pointer
            ">
             {link ? (
                <a href={link} className="text-gray-800 font-medium">
                    {title}
                </a>
            ) : (
                <span className="text-gray-800 font-medium">{title}</span>
            )}
        </div>
    )
}

export default ModelButton;