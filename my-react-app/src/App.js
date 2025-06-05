// Filename - App.js

//import axios from "axios";

//import React, { Component } from "react";

//class App extends Component {
//	state = {
//		// Initially, no file is selected
//		selectedFile: null,
//	};

//	// On file select (from the pop up)
//	onFileChange = (event) => {
//		// Update the state
//		this.setState({
//			selectedFile: event.target.files[0],
//		});
//	};

//	// On file upload (click the upload button)
//	onFileUpload = () => {
//		// Create an object of formData
//		const formData = new FormData();

//		// Update the formData object
//		formData.append(
//			"myFile",
//			this.state.selectedFile,
//			this.state.selectedFile.name
//		);

//		// Details of the uploaded file
//		console.log(this.state.selectedFile);

//		// Request made to the backend api
//		// Send formData object
//		axios.post("api/uploadfile", formData);
//	};

//	// File content to be displayed after
//	// file upload is complete
//	fileData = () => {
//		if (this.state.selectedFile) {
//			return (
//				<div>
//					<h2>File Details:</h2>
//					<p>
//						File Name:{" "}
//						{this.state.selectedFile.name}
//					</p>

//					<p>
//						File Type:{" "}
//						{this.state.selectedFile.type}
//					</p>

//					<p>
//						Last Modified:{" "}
//						{this.state.selectedFile.lastModifiedDate.toDateString()}
//					</p>
//				</div>
//			);
//		} else {
//			return (
//				<div>
//					<br />
//					<h4>
//						Choose before Pressing the Upload
//						button
//					</h4>
//				</div>
//			);
//		}
//	};

//	render() {
//		return (
//			<div>
//				<h1>GeeksforGeeks</h1>
//				<h3>File Upload using React!</h3>
//				<div>
//					<input
//						type="file"
//						onChange={this.onFileChange}
//					/>
//					<button onClick={this.onFileUpload}>
//						Upload!
//					</button>
//				</div>
//				{this.fileData()}
//			</div>
//		);
//	}
//}

//export default App;




//import React, { useState } from 'react';
//import AWS from 'aws-sdk';

//const S3Uploader = () => {
//    const [selectedFile, setSelectedFile] = useState(null);
//    const [uploading, setUploading] = useState(false);

//    const handleFileChange = (event) => {
//        setSelectedFile(event.target.files[0]);
//    };

//    const handleUpload = async () => {
//        if (!selectedFile) return;

//        setUploading(true);

//        const s3 = new AWS.S3({
//            accessKeyId: 'YOUR_ACCESS_KEY_ID',
//            secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
//        });

//        const params = {
//            Bucket: 'ohoindiaimages',
//            Key: selectedFile.name,
//            Body: selectedFile,
//            ACL: 'public-read', 
//        };

//        try {
//            await s3.upload(params).promise();
//            console.log('File uploaded successfully');
//        } catch (error) {
//            console.error('Error uploading file:', error);
//        } finally {
//            setUploading(false);
//        }
//    };

//    return (
//        <div><center>
//            <h1>File upload to S3 bucket</h1>
//            <input type="file" onChange={handleFileChange} />
//            <button onClick={handleUpload} disabled={!selectedFile || uploading}>
//                {uploading ? 'Uploading...' : 'Upload'}
//            </button>
//        </center>
//        </div>
//    );
//};

//export default S3Uploader;







//import React, { useState } from 'react';
//import { Storage, API } from 'aws-sdk';
//import { fetchDataWithBody } from './helpers/externalapi';

//const ImageUploader = () => {
//    const [file, setFile] = useState(null);

//    const handleFileChange = (event) => {
//        const uploadedFile = event.target.files[0];
//        setFile(uploadedFile);
//    };

//    const handleUpload = async () => {
//        try {
//            if (!file) {
//                alert('Please select a file');
//                return;
//            }

//            // Check if the file is an image
//            const isImage = file.type.startsWith('image');

//            // Construct the filename
//            const filename = `${Date.now()}-${file.name}`;

//            // Upload the file to S3
//            await Storage.put(filename, file, {
//                contentType: file.type,
//            });

//            // If it's an image, call an upload API
//            if (isImage) {
//                const response = await fetchDataWithBody('Member/upload', { filename });
//                console.log('Image uploaded:', response);
//            } else {
//                console.log('File uploaded:', filename);
//            }

//            // Reset file state
//            setFile(null);
//        } catch (error) {
//            console.error('Error uploading file:', error);
//        }
//    };

//    return (
//        <div>
//            <input type="file" accept="image/*" onChange={handleFileChange} />
//            <button onClick={handleUpload}>Upload</button>
//        </div>
//    );
//};

//export default ImageUploader;






//import React, { useState } from 'react';
//import { Storage } from 'aws-sdk';

//const ImageUploader = () => {
//    const [file, setFile] = useState(null);

//    const handleFileChange = (event) => {
//        const uploadedFile = event.target.files[0];
//        setFile(uploadedFile);
//    };

//    const handleUpload = async () => {
//        try {
//            if (!file) {
//                alert('Please select a file');
//                return;
//            }

//            // Construct the filename
//            const filename = `${Date.now()}-${file.name}`;

//            // Upload the file to S3
//            const uploadedFile = await Storage.put(filename, file, {
//                contentType: file.type,
//            });

//            // Get the URL of the uploaded image from S3
//            const imageURL = await Storage.get(uploadedFile.key);
//            console.log(imageURL);

//            // Call the upload API with the S3 URL
//            const response = await fetch('Member/upload', {
//                method: 'POST',
//                headers: {
//                    'Content-Type': 'application/json',
//                },
//                body: JSON.stringify({ imageURL }),
//            });

//            if (response.ok) {
//                console.log('Image uploaded successfully');
//            } else {
//                console.error('Failed to upload image:', response.statusText);
//            }

//            // Reset file state
//            setFile(null);
//        } catch (error) {
//            console.error('Error uploading file:', error);
//        }
//    };

//    return (
//        <div>
//            <input type="file" accept="image/*" onChange={handleFileChange} />
//            <button onClick={handleUpload}>Upload</button>
//        </div>
//    );
//};

//export default ImageUploader;











import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {

    const [file, setFile] = useState()

    function handleChange(event) {
        setFile(event.target.files[0])
    }

    function handleSubmit(event) {
        event.preventDefault()
        const url = 'https://localhost:7229/api/Member/upload';
        const formData = new FormData();
        formData.append('file', file);
        formData.append('fileName', file.name);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
        axios.post(url, formData, config).then((response) => {
            console.log(response.data);
        });

    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <h1>React File Upload</h1>
                <input type="file" onChange={handleChange} />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
}

export default App;
