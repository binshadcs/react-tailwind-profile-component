export default function Profile() {
    return (
        <div className="rounded-lg shadow-xl overflow-hidden mt-10 font-mono">
            <img src="https://i.imgur.com/dYcYQ7E.png" className="w-full" />
            <div className="flex justify-center -mt-8">
                <img src="https://i.imgur.com/8Km9tLL.jpg" className="rounded-full border-solid border-white border-2 -mt-3" />	
            </div>
            <div className="text-center">
                <h3 className="font-bold">Rita Correia <span className="text-slate-500">32</span></h3>
                <p className="text-slate-500">London</p>
            </div>
            <div className="flex justify-around border-t-2 border-black-700 mt-10 mb-8 pt-4">
                <div className="text-center">
                    <h4 className="font-bold">80K</h4>
                    <p className="text-slate-500 text-sm">Followers</p>
                </div>
                <div className="text-center">
                    <h4 className="font-bold">803K</h4>
                    <p className="text-slate-500 text-sm">Likes</p>
                </div>
                <div className="text-center">
                    <h4 className="font-bold">1.4K</h4>
                    <p className="text-slate-500 text-sm">Photos</p>
                </div>
            </div>
        </div>
    )
}