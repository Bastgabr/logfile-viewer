import React from 'react';
import '../../utils/styles/FileUploader.css';
import '../../utils/styles/Buttons.css';
import { useState } from 'react';
import ProgressBar from '../Progressbar/index.tsx';
import UploadIcon from '../../assets/upload.svg';
import FilesIcon from '../../assets/files-icon.svg';
import MultiCurlDottedArrow from '../../assets/multi-curl-dotted-arrow.svg';
import CurlyDottedArrow from '../../assets/curly-dotted-arrow.svg';

const FileUploader = ({ setUploadedFile }) => {
  const [dragOver, setDragOver] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  /**
   * Handles the drag over event above the drop zone
   * @param e drag over event
   * @returns
   */
  const handleDragOver = (e) => {
    if (e.dataTransfer.items.length === 0) return;

    let filesOnly = Array(e.dataTransfer.items[0]).some(
      (file) => file.kind === 'file'
    );
    if (!filesOnly) return false;

    e.preventDefault();
    setDragOver(true);
  };

  /**
   * Handles the drag leve event when leaving the drop zone
   * @param e drag event
   */
  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOver(false);
  };

  /**
   * Handle drop event
   * @param e drop event
   */
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

  /**
   * Upload file with file readerAPI
   * @param file file to upload
   */
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
    });
  };

  const onFileInput = (e) => {
    uploadFile(e.target.files[0]);
  };

  //Default content
  let defaultContent = (
    <div className="content">
      <h1>Upload Logfile</h1>
      <label>
        Drag and drop a file in <span className="secondary">the area</span> or
        press on the button to upload a log file
      </label>
      <div
        className={`drop-zone ${dragOver && 'active'} `}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="decoration left">
          <img src={MultiCurlDottedArrow} alt="arrow icon"></img>
        </div>
        <div className="image-container">
          <img className="image" src={FilesIcon} alt="files icon"></img>
        </div>
        <div className="decoration right">
          <img src={CurlyDottedArrow} alt="arrow icon"></img>
        </div>
      </div>
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

  //Shows the loader
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
