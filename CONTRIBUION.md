# Contributing Guidelines

## Welcome Contributors! 🌟

We appreciate your interest in enhancing our Movies and Web Series Collection. Follow these steps to contribute:

1. **Fork the Repository:**
   - Fork this repository to your GitHub account.

        git clone https://github.com/your-username/Movies-Collection.git
        cd Movies-Collection

2. **Create a New Branch:**
   - Create a new branch with a descriptive name (e.g., `feature/add-awesome-movie`).

        git checkout -b feature/add-awesome-movie


3. **Add Your Movie or Web Series:**
   - Use the provided code template below to add your content. Save your image in the 'images' folder and import it before the component name.

   ```jsx
   {/* CARD_NUMBER */}
   <Card>
     <div style={{ display: "flex", alignItems: "center" }}>
       <div style={{ flex: 1 }}>
         <img
           src={IMG_NAME}
           alt="IMG_NAME"
           style={{ maxWidth: "100%", height: "150px" }}
         />
       </div>
       <div style={{ flex: 6 }}>
         <h3>MOVIE_OR_WEB_SERIES_TITLE</h3>
         <p>
           DESCRIPTION_OF_THE_CONTENT
         </p>
         <div
           style={{
             display: "flex",
             justifyContent: "center",
             alignItems: "center",
           }}
         >
           <a
             href='YOUR_GITHUB_URL'
             target="_blank"
             rel="noopener noreferrer"
           >
             <Button type="primary">Contributed by YOUR_NAME</Button>
           </a>
         </div>
       </div>
     </div>
   </Card>

NOTE: Save your image in images folder and import your image before component name.


# Our Amazing Contributors ⭐

<a href="https://github.com/vikhyatsingh123/Movies-Collection/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=vikhyatsingh123/Movies-Collection" />
</a>


# Step 4: Make Your Changes
# Add the movie or web series card in the appropriate file and save the changes.

# Step 5: Stage and Commit Your Changes
git add .
git commit -m "Add awesome movie or web series"

# Step 6: Push Your Changes to GitHub
git push origin feature/add-awesome-movie

# Step 7: Create a Pull Request
# Once your pull request is created, it will be reviewed by the project maintainers.
# If everything looks good, your changes will be merged into the main branch.

