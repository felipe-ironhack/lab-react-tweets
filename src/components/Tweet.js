import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet({ tweet }) {
	console.log(tweet.user, tweet.timestamp, tweet.message);
	return (
		<div className='tweet'>

      <ProfileImage src={tweet.user.image} />

			<div className='body'>
				<div className='top'>
					<User name={tweet.user.name} handle={tweet.user.handle} />
					
					<Timestamp timestamp={tweet.timestamp} />
				</div>

				<p className='message'>{tweet.message}</p>

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
