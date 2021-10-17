# Decipher
A revolution in medical conversation. Decipher is a novel approach to language translation, looking to remove the inflexibility associated with existing solutions. Leveraging a native end-to-end speech pipeline, we make medical anxiety a thing of the past. Now you can interact seamlessly with healthcare professionals, regardless of language barriers, allowing you to receive medical assistance whenever and wherever you are.

# Tables of Contents
* [Introduction](https://github.com/soodshru/Decipher#introduction)
* [Technologies](https://github.com/soodshru/Decipher#technologies)
* [Requirements](https://github.com/soodshru/Decipher#requirements)
* [Status](https://github.com/soodshru/Decipher#status)

## Introduction
Difficulties in accesssing healthcare are one of the leading issues faced by Canadian refugees today. The language barrier tends to be a prominent cause of this, especially when people first emigrate to the country and are generally only fluent in their mother tongue. Furthermore, the lack of common terminology for medical symptoms in most languages means that communicating to a medical professional is often an exercise in frustration. Additionally, this can lead to delays in getting the help that is needed, which increases the chances of complications arising. Decipher aims to eradicate these barriers to conversation by providing a speech-first platform that bridges the gap in languages. By leveraging the power of the Google Cloud Platform, we are able to seamlessly translate speech across a wide variety of languages, allowing for a more natural flow of conversation. 

## Technologies
This project consists of a Python backend which queries neural network translation models hosted on the Google Cloud Platform. A Flask server listens for requests from the React JS frontend and routes them to the appropriate model.

## Requirements
Requirements are detailed in `requirements.txt`. For simplicity, we provide a makefile that creates a virtual environment and installs all dependencies that are needed for this project. The only prerequisite for this is having `Python 3.6+` and `pip3` installed.

In order to use the makefile, run `make build` to compile the project and `make start` to run the project. Both commands should be run in the root directory.

## Status
As of October 2021, the project is active. We have plans for improving the quality of translations by leveraging regional models for certain languages, when available.
