
# AI-Powered Semantic Note-Taking App (React Native)

A note-taking application built with React Native that leverages AI for semantic text search. This enables users to organize, search, and discover notes based on meaning and context, not just keywords.

## Features

- **Semantic Text Search:** Find relevant notes by meaning and context using natural language queries powered by AI text embeddings.
- **Cross-Platform:** Runs natively on both iOS and Android (React Native).
- **Easy Note Management:** Create, edit, and delete notes with a user-friendly interface.
- **Modern UI:** Clean and responsive design, making note organization clear and efficient.
- **Extensible:** Designed to easily add features like reminders, image search, or collaborative editing.

## How It Works

- When you create or edit a note, the app processes the text through an AI model to generate a vector embedding.
- During search, your query is similarly converted. The app then searches for notes with similar embeddings, returning matches based on semantic meaning instead of simple keyword matches.
- The core AI logic is kept efficient for mobile environments using libraries such as ExecuTorch, so everything stays local and private.

## Demo

https://github.com/user-attachments/assets/3253ca14-4612-4df9-baa2-408b46202055

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Navya-Raj/mc-project-ai-not-taking-app
   cd ai-semantic-notes
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the App:**
   ```bash
   npx react-native run-android
   # or
   npx react-native run-ios
   ```

## Project Structure
```
app/
  _layout.tsx           # App navigation
  index.tsx             # App entry point
  notes.tsx             # Notes list screen
  note/
    [id].tsx            # Note editor screen

services/
  notesService.ts       # Handles note creation, updates, and deletion
  storage/
    notes.ts            # Manages local data storage (via AsyncStorage)

types/
  note.ts               # Type definitions for Note objects

constants/
  theme.ts              # App theme configuration
```

## Resources

[1](https://blog.swmansion.com/building-an-ai-powered-note-taking-app-in-react-native-part-3-local-rag-868ba75f818b)
[2](https://github.com/callstack/ReactNativeNotes)
[3](https://www.geeksforgeeks.org/react-native/how-to-create-a-basic-notes-app-using-react-native/)
[4](https://www.youtube.com/watch?v=TQc6hdc5-8c)
[5](https://stack.convex.dev/full-stack-ai-voice-note-taking-app)
[6](https://www.youtube.com/watch?v=FvkmYGs6U50)
[7](https://dev.to/kartikbudhraja/building-a-simple-note-taking-app-with-react-2g2k)
[8](https://blog.swmansion.com/building-an-ai-powered-note-taking-app-in-react-native-part-2-image-semantic-search-0456895cdf17)
[9](https://www.youtube.com/watch?v=vl_Hi9sOyn8)
