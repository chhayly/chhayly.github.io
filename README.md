# Chhayly Sreng - Personal Portfolio Website

A modern, responsive personal portfolio website showcasing expertise in AI research, software engineering, and computer science. Built with vanilla HTML, CSS, and JavaScript, optimized for GitHub Pages deployment.

## 🌟 Features

### Design & User Experience
- **Modern & Clean Design**: Professional layout with beautiful typography and spacing
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between themes with persistent preference storage
- **Smooth Animations**: AOS (Animate On Scroll) integration with custom animations
- **Interactive Elements**: Hover effects, smooth scrolling, and dynamic transitions

### Sections Included
- **Hero Section**: Professional introduction with call-to-action buttons
- **About Me**: Personal background, education timeline, and journey
- **Experience**: Professional timeline with detailed work history
- **Skills**: Categorized technical skills with interactive tags
- **Projects**: Portfolio showcase with technology stacks and links
- **Publications**: Academic and research publications
- **Contact**: Contact form with Formspree integration

### Technical Features
- **Performance Optimized**: Fast loading times and efficient animations
- **Accessibility**: WCAG compliant with proper semantic HTML and keyboard navigation
- **SEO Friendly**: Meta tags, structured data, and semantic markup
- **Cross-browser Compatible**: Works on all modern browsers
- **Mobile-first Design**: Progressive enhancement approach

## 🚀 Tech Stack

| Component | Technology |
|-----------|------------|
| **Frontend** | HTML5, CSS3, JavaScript (ES6+) |
| **Styling** | CSS Custom Properties, Flexbox, Grid |
| **Animations** | AOS.js, Custom CSS animations |
| **Icons** | Font Awesome 6 |
| **Forms** | Formspree (contact form handling) |
| **Hosting** | GitHub Pages |
| **Version Control** | Git & GitHub |

## 📁 Project Structure

```
chhayly.github.io/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css       # Main stylesheet
│   ├── js/
│   │   └── script.js       # JavaScript functionality
│   ├── img/                # Images and graphics
│   └── files/              # Downloadable files (resume, etc.)
├── README.md               # Project documentation
└── .nojekyll              # GitHub Pages configuration
```

## 🎨 Design System

### Color Palette
- **Primary**: #3b82f6 (Blue)
- **Secondary**: #6366f1 (Indigo)
- **Accent**: #10b981 (Emerald)
- **Text**: #1f2937 (Gray-800) / #f9fafb (Gray-50 for dark mode)
- **Background**: #ffffff / #111827 (for dark mode)

### Typography
- **Font Family**: Inter, system fonts
- **Headings**: 700 weight
- **Body**: 400 weight
- **Emphasis**: 500-600 weight

## 🛠️ Setup & Deployment

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/chhayly/chhayly.github.io.git
   cd chhayly.github.io
   ```

2. **Open in browser**
   - Simply open `index.html` in your browser
   - Or use a local server: `python -m http.server 8000`

### GitHub Pages Deployment

1. **Repository Setup**
   - Ensure repository is named `username.github.io`
   - Push all files to the `main` branch

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select `main` branch as source
   - Site will be available at `https://username.github.io`

3. **Custom Domain (Optional)**
   - Add CNAME file with your domain
   - Configure DNS settings

## 📝 Customization Guide

### Personal Information
1. **Update content in `index.html`**:
   - Name and titles
   - About me section
   - Experience timeline
   - Skills and technologies
   - Projects and publications
   - Contact information

2. **Update links**:
   - Social media profiles
   - GitHub repositories
   - LinkedIn profile
   - Email address

### Contact Form Setup
1. **Formspree Integration**:
   - Sign up at [Formspree.io](https://formspree.io)
   - Replace `YOUR_FORM_ID` in the contact form action
   - Test form submission

2. **Alternative Services**:
   - EmailJS
   - Netlify Forms
   - Custom backend integration

### Adding Content

#### New Project
```html
<div class="project-card" data-aos="fade-up">
    <div class="project-image">
        <i class="fas fa-icon-name"></i>
    </div>
    <div class="project-content">
        <h3>Project Title</h3>
        <p>Project description...</p>
        <div class="project-tech">
            <span>Technology 1</span>
            <span>Technology 2</span>
        </div>
        <div class="project-links">
            <a href="github-link" class="project-link">
                <i class="fab fa-github"></i>
            </a>
            <a href="demo-link" class="project-link">
                <i class="fas fa-external-link-alt"></i>
            </a>
        </div>
    </div>
</div>
```

#### New Publication
```html
<div class="publication-item" data-aos="fade-up">
    <div class="publication-content">
        <h3>Publication Title</h3>
        <p class="authors">Author names</p>
        <p class="publication-venue">Journal/Conference • Year</p>
        <div class="publication-links">
            <a href="pdf-link" class="publication-link">
                <i class="fas fa-file-pdf"></i> PDF
            </a>
            <a href="doi-link" class="publication-link">
                <i class="fas fa-link"></i> DOI
            </a>
        </div>
    </div>
</div>
```

## 🎯 Performance & SEO

### Performance Optimizations
- **Minified CSS/JS**: Compressed for faster loading
- **Optimized Images**: WebP format when possible
- **Lazy Loading**: AOS handles scroll-based loading
- **Efficient Animations**: Hardware-accelerated transforms

### SEO Features
- **Meta Tags**: Comprehensive meta information
- **Structured Data**: Schema.org markup
- **Semantic HTML**: Proper heading hierarchy
- **Alt Text**: Image accessibility descriptions

## 🔧 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 70+ |
| Firefox | 70+ |
| Safari | 12+ |
| Edge | 79+ |

## 📱 Responsive Breakpoints

| Device | Breakpoint |
|--------|------------|
| Mobile | < 768px |
| Tablet | 768px - 1024px |
| Desktop | > 1024px |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: chhayly@vt.edu
- **LinkedIn**: [linkedin.com/in/chhayly-sreng](https://linkedin.com/in/chhayly-sreng)
- **GitHub**: [github.com/chhayly](https://github.com/chhayly)

---

**Built with ❤️ by Chhayly Sreng**

*Last updated: December 2024* 