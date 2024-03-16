export default function Heading({ title, className = '' }) {
    return (
        <h1 className={`
            tracking-tight 
            font-semibold 
            text-4xl 
            md:text-5xl 
            lg:text-6xl 
            mb-5 
            md:mb-10
            lg:mb-10
            ${className}
        `} style={{ textAlign: 'center' }}>
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#feba3d] to-[#feba3d]" style={{ fontFamily: 'Montserrat', fontSize: '30px' }}>
                {title}
            </span>
        </h1>
    );
}
