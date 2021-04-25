const { useState } = require("react");


const UploadVideo = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription]=useState("");
    const [file, setFile] = useState("");
    

    const handleVideoUpload = async () => {
        try {
            const data = new FormData();
            const res = await axios.post('https://api.cloudinary.com/v1_1/dzfyk3r12/upload',data)
            return res.data.url;
        } catch (err) {
            console.error(err);
        }
    }
    const handleVideoSubmit = async (e, videoDescription)=> {
        e.preventDefault();
        const uploadedUrl = await handleVideoUpload();
        videoDescription({variables: {title, description, url: uploadedUrl}})
    }
    const handleVideoChange = (e) => {
        const selectedFile = e.target.files[0];
        const fileSizeLimit = 10000000;
        //Handle file size limit
    }
    return (
        <>
            <form onSubmit={e=>handleVideoSubmit(e,videoDescription)}>
                <label>Title</label>
                <label>Description</label>

                <label htmlFor="video">Video</label>
                <input id="video" required type="file" accept="video/mp4, video/mov, video/wmv, video/flv, video/avi, video/webm, video/mkv" onChange={handleVideoChange}/>
                <span><button type="submit">Upload Video File</button> {file && file.name}</span>
            </form>
        </>
    )
}

export default UploadVideo