🎵 Audioly – Music Web Application (PocketBase Backend)

Audioly is a modern music web application that allows users to stream and manage music content.
This repository contains the PocketBase backend setup used for authentication, database management, and API services.

📁 Project Structure
audioly.com-master/
│
├── pocketbase_0.22.5_windows_amd64/
│   ├── pocketbase.exe
│   ├── pb_data/
│   └── README.md
│
├── frontend/
│   └── (UI files)
│
└── README.md

🚀 Technologies Used
Backend

PocketBase v0.22.5

Built-in REST API

SQLite Database

Authentication (Admin & Users)

Frontend (if applicable)

HTML

CSS

JavaScript

🔧 PocketBase Setup (Windows)
1️⃣ Download & Extract

Ensure the folder pocketbase_0.22.5_windows_amd64 is extracted properly.

2️⃣ Run PocketBase Server

Open Command Prompt inside the folder and run:

pocketbase.exe serve

3️⃣ Access Admin Panel

Open your browser and go to:

http://127.0.0.1:8090/_/


Create an admin account to manage collections and users.

🗄️ Database Features

User Authentication

Music Data Storage

File Upload Support (Audio Files)

Auto-generated REST APIs

🔐 Authentication

PocketBase provides:

Email & Password Login

Token-based Authentication

Admin & User Roles

📌 Features

🎶 Music streaming support

👤 User authentication

📂 Audio file management

⚡ Fast and lightweight backend

🔄 REST API integration

▶️ How to Use

Start PocketBase server

Configure collections (Users, Songs, Playlists)

Connect frontend with PocketBase APIs

Upload music files via admin panel

Stream music from frontend

🧪 Sample API Endpoint
GET http://127.0.0.1:8090/api/collections/songs/records
