import React from 'react';
import FileUploader from '../../components/FileUploader/index.tsx';
import styled from 'styled-components';
import { useState } from 'react';

const HomeWrapper = styled.div`
  height: calc(100vh - 102px);
  padding-top: 16px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const Home = ({ newUpload = false }) => {
  const [uploadedFile, setUploadedFile] = useState('');

  if (newUpload && uploadedFile !== '') {
    setUploadedFile('');
    console.log('restarting' + uploadedFile);
  }

  let fileUploaderContent = (
    <FileUploader setUploadedFile={setUploadedFile}></FileUploader>
  );

  let fileViewer = <div style={{ overflow: 'scroll' }}>{uploadedFile}</div>;

  return (
    <HomeWrapper>
      {uploadedFile === '' ? fileUploaderContent : fileViewer}
    </HomeWrapper>
  );
};

export default Home;
