import React from 'react'

const UserList = () => {
    return (
        <>
            <div className="chat-list">
                <div className="chat-box">
                    <div className="img-box">
                        <img className="img-cover"
                            src="https://lh5.googleusercontent.com/-7ssjf_mDE1Q/AAAAAAAAAAI/AAAAAAAAASo/tioYx2oklWEHoo5nAEyCT-KeLxYqE5PuQCLcDEAE/s100-c-k-no-mo/photo.jpg"
                            alt="" />
                    </div>
                    <div className="chat-details">
                        <div className="text-head">
                            <h4>Nowfal</h4>
                            <p className="time unread">11:49</p>
                        </div>
                        <div className="text-message">
                            <p>“How are you?”</p>
                            <b>1</b>
                        </div>
                    </div>
                </div>
                <div className="chat-box">
                    <div className="img-box">
                        <img className="img-cover"
                            src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="" />
                    </div>
                    <div className="chat-details">
                        <div className="text-head">
                            <h4>Rohan</h4>
                            <p className="time unread">10:49</p>
                        </div>
                        <div className="text-message">
                            <p>“I’ll be there.”</p>
                            <b>4</b>
                        </div>
                    </div>
                </div>
                <div className="chat-box">
                    <div className="img-box">
                        <img className="img-cover"
                            src="https://images.pexels.com/photos/8367221/pexels-photo-8367221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="" />
                    </div>
                    <div className="chat-details">
                        <div className="text-head">
                            <h4>Zoya</h4>
                            <p className="time unread">09:49</p>
                        </div>
                        <div className="text-message">
                            <p>“Make somebody’s day.”</p>
                            <b>2</b>
                        </div>
                    </div>
                </div>
                <div className="chat-box">
                    <div className="img-box">
                        <img className="img-cover"
                            src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="" />
                    </div>
                    <div className="chat-details">
                        <div className="text-head">
                            <h4>Ava</h4>
                            <p className="time">08:49</p>
                        </div>
                        <div className="text-message">
                            <p>“Dreams come true.”</p>
                        </div>
                    </div>
                </div>
                <div className="chat-box active">
                    <div className="img-box">
                        <img className="img-cover"
                            src="https://images.pexels.com/photos/2474307/pexels-photo-2474307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="" />
                    </div>
                    <div className="chat-details">
                        <div className="text-head">
                            <h4>Leo</h4>
                            <p className="time">07:49</p>
                        </div>
                        <div className="text-message">
                            <p>Awesome! I'll start a vid..</p>
                        </div>
                    </div>
                </div>
                <div className="chat-box">
                    <div className="img-box">
                        <img className="img-cover"
                            src="https://images.pexels.com/photos/3564412/pexels-photo-3564412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="" />
                    </div>
                    <div className="chat-details">
                        <div className="text-head">
                            <h4>Azariah</h4>
                            <p className="time">06:49</p>
                        </div>
                        <div className="text-message">
                            <p>“Love, light, laughter.”</p>
                        </div>
                    </div>
                </div>
                <div className="chat-box">
                    <div className="img-box">
                        <img className="img-cover"
                            src="https://images.pexels.com/photos/2919367/pexels-photo-2919367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="" />
                    </div>
                    <div className="chat-details">
                        <div className="text-head">
                            <h4>Oliver</h4>
                            <p className="time unread">Yesterday</p>
                        </div>
                        <div className="text-message">
                            <p>“Appreciate the mome..”</p>
                            <b>2</b>
                        </div>
                    </div>
                </div>
                <div className="chat-box">
                    <div className="img-box">
                        <img className="img-cover"
                            src="https://images.pexels.com/photos/14526673/pexels-photo-14526673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="" />
                    </div>
                    <div className="chat-details">
                        <div className="text-head">
                            <h4>Jeslin</h4>
                            <p className="time">Yesterday</p>
                        </div>
                        <div className="text-message">
                            <p>“Now or never.”</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserList