export function Image(props) {
    return (
      <div className='image-container'>
        <img src={props.path} alt='profile photo'className='profilePhoto'/>
      </div>
    );
}