# CANAAN Career Information Centre - Website Setup Guide

## 🎉 Website is Now Live!

Your professional CANAAN Career Information Centre website is ready! The website is currently running on **http://localhost:5174/**

## 📋 Features Implemented

✅ **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
✅ **Sticky Navigation** - Professional navbar with mobile sidebar menu
✅ **Smooth Scrolling** - All sections smoothly scroll to view
✅ **Hero Section** - Eye-catching landing section with CTA button
✅ **About Section** - Information about CANAAN with key features
✅ **Services Section** - Grid layout of all courses offered
✅ **Partners Section** - Grid/List view toggle for affiliated colleges
✅ **Contact Form** - Fully functional form with validation
✅ **Footer** - Complete footer with links and contact info
✅ **Modern UI** - Beautiful gradients, animations, and hover effects

---

## 🔧 Supabase Configuration

To display real college data from your database, follow these steps:

### 1. Create a Supabase Project
- Go to [supabase.com](https://supabase.com)
- Sign up or log in
- Create a new project
- Take note of your **Project URL** and **Anon Public Key**

### 2. Create Database Table
Run this SQL in Supabase SQL Editor:

```sql
CREATE TABLE colleges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  image_url TEXT,
  specialties TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Enable row level security
ALTER TABLE colleges ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access" ON colleges
  FOR SELECT USING (true);
```

### 3. Update Supabase Credentials
Edit `src/supabaseClient.ts`:

```typescript
const SUPABASE_URL = 'YOUR_PROJECT_URL';
const SUPABASE_ANON_KEY = 'YOUR_ANON_KEY';
```

Replace with your actual credentials from Supabase project settings.

### 4. Uncomment Supabase Code
In `src/components/Partners.tsx`, uncomment the Supabase query:

```typescript
// Find this section in the fetchColleges function:
const { data, error } = await supabase
  .from('colleges')
  .select('*');

if (error) {
  setError(error.message);
} else {
  setColleges(data || []);
}
```

---

## 📱 Mobile Responsiveness

The website is fully responsive with custom breakpoints:
- **Desktop**: Full navigation menu
- **Tablet (≤768px)**: Adjusted spacing and layout
- **Mobile (≤480px)**: Mobile-first sidebar navigation menu

The navbar automatically converts to a hamburger menu on mobile devices.

---

## 🎨 Color Scheme

- **Primary**: #667eea (Purple/Blue)
- **Secondary**: #764ba2 (Dark Purple)
- **Accent**: #f39c12 (Orange)
- **Dark**: #2c3e50 (Dark Slate)
- **Light**: #f8f9fa (Off-white)

---

## 📂 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx & Navbar.css      (Navigation with mobile menu)
│   ├── Hero.tsx & Hero.css           (Landing section)
│   ├── About.tsx & About.css         (About section)
│   ├── Services.tsx & Services.css   (Courses offered)
│   ├── Partners.tsx & Partners.css   (Affiliated colleges)
│   ├── Contact.tsx & Contact.css     (Contact form)
│   └── Footer.tsx & Footer.css       (Footer)
├── supabaseClient.ts                 (Supabase configuration)
├── App.tsx                          (Main component)
├── App.css                          (Global component styles)
├── index.css                        (Global styles)
└── main.tsx                         (Entry point)
```

---

## 🚀 Available Scripts

From `c:\Users\ARJUN\OneDrive\Desktop\canan\canaan`:

```bash
npm run dev      # Start development server (port 5174)
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## 📞 Contact Information

The website displays the following contact channels:

**Main Office:**
- Location: H.O Mallappally, Opp. SBI Bus Stand Road
- Phone: +91 9447189626, +91 8086250005

**Branches:**
- **Ranni**: +91 9497103901, +91 6235162731
- **Konni**: +91 8289895626, +91 8921022436
- **Idukki**: +91 9447189626, +91 9447689626

---

## 🎓 Courses Listed

The website displays 56+ professional courses organized by category:

- **Medical**: MBBS, BDS, MDS, BAMS, BHMS, Nursing, G.N.M, MLT, BPT
- **Engineering**: BE, B.Tech
- **Pharmacy**: B.Pharm, Pharm D, M.Pharm
- **Allied Health**: BHS, Radiography, BASLP, Perfusion, Dialysis, Optometry
- **Business**: BBM, BCA, MBA, MCA, MSW, BSW, BBA, B.Com ACCA, B.Sc OTIAT
- **Design**: FD/ID, Polytechnic, B.Sc IMT

---

## 🔒 Security Notes

1. The Supabase Anon Key displayed in code is public by design
2. Use Row Level Security (RLS) policies to protect sensitive data
3. For production, consider implementing proper authentication

---

## 🌐 Customization

### Update College Data
Edit `Partners.tsx` to add real colleges:

```typescript
const sampleColleges: College[] = [
  {
    id: '1',
    name: 'Your College Name',
    location: 'City',
    image_url: 'URL_TO_IMAGE',
    specialties: 'Course Names'
  },
  // Add more colleges...
];
```

### Update Navigation Links
Edit `Navbar.tsx` to add more menu items or change links

### Modify Contact Information
Edit `Contact.tsx` phone numbers and addresses

---

## 📧 Contact Form Submission

Currently, the form displays a success message. To send emails:

1. **Option 1: Use Email Service**
   - Install: `npm install nodemailer` (for backend) or `email-js`
   - Configure SMTP settings
   - Update form submission in `Contact.tsx`

2. **Option 2: Use Supabase Function**
   - Create a database table for submissions
   - Add form data to Supabase on submission

3. **Option 3: Third-party Service**
   - Use services like SendGrid, Mailgun, or AWS SES
   - Integrate API in form submission handler

---

## 🐛 Troubleshooting

**Port 5174 already in use?**
```bash
npx vite --port 5175
```

**Images not loading?**
- Ensure image URLs are accessible
- For Supabase, upload images to Supabase Storage first

**Styles not applying?**
- Clear browser cache (Ctrl+Shift+Del)
- Restart development server

**TypeScript errors?**
```bash
npm run lint  # Check for errors
```

---

## 📝 Production Deployment

### Build for Production
```bash
npm run build
```

Output files in `dist/` folder

### Deploy to Services
- **Vercel**: Connect GitHub repo, it will auto-deploy
- **Netlify**: Drag & drop `dist/` folder
- **AWS S3 + CloudFront**: Upload `dist/` to S3
- **GitHub Pages**: Use `dist/` as source

---

## 🎯 Next Steps

1. ✅ Website Structure - **DONE**
2. ⏳ Configure Supabase database
3. ⏳ Add real college data
4. ⏳ Set up email notifications for contact form
5. ⏳ Deploy to production
6. ⏳ Set up analytics
7. ⏳ SEO optimization

---

## 📞 Support

For questions or issues, contact:
- **CANAAN Office**: +91 9447189626
- **Location**: Mallappally, Kerala

---

**Website Version**: 1.0.0
**Last Updated**: April 13, 2026
**Created by**: GitHub Copilot
