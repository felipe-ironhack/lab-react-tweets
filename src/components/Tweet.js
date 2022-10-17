import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet({ tweet, tweet: { user } }) {
	console.log(user);
	return (
		<div className='tweet'>

      <ProfileImage src={user.image} />

			<div className='body'>
				<div className='top'>
					<User name={user.name} handle={user.handle} />
					
					<Timestamp timestamp={tweet.timestamp} />
				</div>

				<Message message= {tweet.message} />


				<div className='actions'>
					{/* Font Awesome icons */}
					<i className='far fa-comment'></i>
					<i className='fas fa-retweet'></i>
					<i className='far fa-heart'></i>
					<i className='fas fa-share'></i>
				</div>
			</div>

			<i className='fas fa-ellipsis-h'></i>
		</div>
	);
}

export default Tweet;
