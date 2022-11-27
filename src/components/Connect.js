import { Footer, Navbar } from "./PageComponents";

export default function Connect() {
    window.scrollTo(0,0);
    document.title = "Connect with Akshay!";

    return (
        <>
            <Navbar />
            <div className="connect my-8 text-center">
                <h1 style={{ fontFamily: 'Fester' }} className="text-5xl font-bold">Connect</h1><br/>
                <p>Find me on these platforms and we can connect!</p>
                <br/><br/>
                <div className="flex flex-row mx-24">
                    <div>
                        <i class="fa fa-envelope" aria-hidden></i>
                        <h1 className="text-lg">Email</h1>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}