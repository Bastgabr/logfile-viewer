import React from 'react';
import '../../utils/styles/FileUploader.css';
import '../../utils/styles/Buttons.css';
import { useState } from 'react';
import UploadIcon from '../../assets/upload.svg';
import FilesIcon from '../../assets/files-icon.svg';
import MultiCurlDottedArrow from '../../assets/multi-curl-dotted-arrow.svg';
import CurlyDottedArrow from '../../assets/curly-dotted-arrow.svg';
import ProgressBar from '../Progressbar/index.tsx';

const FileUploader = ({ setUploadedFile }) => {
  const [, setDragOver] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleDragOver = (e) => {
    if (e.dataTransfer.items.length === 0) return;
    //TODO: prevent the drop on the main div, prevent from dropping text only, images etc..
    //console.log(e.dataTransfer.items);
    //console.log(e.dataTransfer.items[0].kind);
    //kind = e.dataTransfer.items[0].some();
    //if(e.dataTransfer.files)

    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);

    const file = e.dataTransfer.files[0];

    const reader = new FileReader();
    reader.readAsText(file);
    setIsLoading(true);

    //Read the content of the file
    uploadFile(file);
  };

  const uploadFile = (file) => {
    const reader = new FileReader();
    reader.readAsText(file);
    setIsLoading(true);

    reader.addEventListener('load', () => {
      if (reader == null || reader.result == null) return;
      const content = reader.result.toString();
      setUploadedFile(content);
      setIsLoading(false);
    });

    reader.addEventListener('progress', (event) => {
      var progress = parseInt(
        ((event.loaded / event.total) * 100).toString(),
        10
      );
      setUploadProgress(progress);
      console.log(progress + ' %');
    });
  };

  const onFileInput = (e) => {
    uploadFile(e.target.files[0]);
  };

  let defaultContent = (
    <div className="content">
      <h1>Upload Logfile</h1>
      <label>
        Drag and drop a file in <span className="secondary">the area</span> or
        press on the button to upload a log file
      </label>
      <div
        className="drop-zone"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="decoration left">
          <img src={MultiCurlDottedArrow} alt="arrow icon"></img>
        </div>
        <img className="image" src={FilesIcon} alt="files icon"></img>
        <div className="decoration right">
          <img src={CurlyDottedArrow} alt="arrow icon"></img>
        </div>
      </div>
      {/* TODO: Put a callback on the <input> to retrieve the file */}
      <div className="upload-button-container">
        <label className="primary-button" htmlFor="file-upload">
          <div>
            <img src={UploadIcon} alt="upload icon"></img>
            <span>Browse</span>
          </div>
        </label>
        <input
          id="file-upload"
          type="file"
          accept=".txt,.log"
          onChange={onFileInput}
        ></input>
      </div>
    </div>
  );

  let loaderContent = (
    <div className="content">
      <h1>Uploading files</h1>
      <ProgressBar width={'100%'} uploadProgress={uploadProgress}></ProgressBar>
    </div>
  );

  return (
    <div className={`file-uploader`}>
      {isLoading === false ? defaultContent : loaderContent}
    </div>
  );
};

export default FileUploader;
