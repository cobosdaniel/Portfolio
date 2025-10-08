🧑‍💻 Daniel Cobos — Portfolio

This is my personal portfolio website, built with Next.js
 and hosted on Vercel
.
It showcases my software engineering work across full-stack, mobile, and cloud development.

🚀 Getting Started (Development)

To run the project locally:

npm install
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev


Once started, visit http://localhost:3000
 to view the site.

The main landing page is located in:

app/page.tsx


You can freely modify this file to update sections such as the hero banner, project listings, and footer.

Tech Stack

Framework: Next.js 15

Styling: Tailwind CSS

Font Optimization: Geist

Deployment: Vercel

TypeScript for static typing and maintainability

About the Site

This portfolio serves as a hub for my professional and personal projects, including:

Big John’s Books — A full-stack bookstore web app using Flask + MySQL with inventory, carts, and checkout.


The site also features quick links to my:

Email

LinkedIn

GitHub

Resume (PDF)

🛠️ Project Structure
app/
 ├─ page.tsx        # Main landing page
 ├─ globals.css     # Global styles
 ├─ layout.tsx      # Root layout
public/
 ├─ avatar.jpg      # Profile image
 ├─ Daniel Cobos Resume.pdf
 └─ icons/          # Any custom assets

Deployment

This portfolio is automatically deployed through Vercel.
Every push to the main branch triggers a new deployment build.

You can check out the live version here:
danielcobos.dev
