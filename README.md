---

# 📊 Interactive Sales Dashboard

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![Chart.js](https://img.shields.io/badge/Chart.js-v4.x-blueviolet)

A **responsive, single‑page dashboard** built with **HTML, CSS, JavaScript, and Chart.js**.
Originally created as part of the GDSC‑NSUT recruitment process, the project demonstrates skills in data visualization, DOM manipulation, and front‑end design.

---

## ✨ Features

* **Multi‑type Charts** — Line, bar, pie, and scatter charts powered by **Chart.js**.
* **Responsive Layout** — Adapts to desktop and mobile viewports.
* **Live Search & Add Item** — Search for products or append new ones dynamically to a list.
* **Clean UI** — Modern styling without external CSS frameworks.
* **Lightweight** — No build tools or dependencies; runs from a single HTML file.

---

## 🚀 Demo

<img width="1919" height="914" alt="Screenshot 2024-10-13 223228" src="https://github.com/user-attachments/assets/99878aea-f3f6-42c0-98e2-196092938741" />
<img width="1919" height="915" alt="Screenshot 2024-10-13 223257" src="https://github.com/user-attachments/assets/3bd9ea76-0c69-4046-a72b-37977579b41d" />
<img width="1919" height="910" alt="Screenshot 2024-10-13 223321" src="https://github.com/user-attachments/assets/7f990d30-5a60-4e37-9ec4-6c8e2a600996" />
<img width="1919" height="910" alt="Screenshot 2024-10-13 223352" src="https://github.com/user-attachments/assets/ac46b58d-b13e-4477-9d64-1c7aefd1a3a3" />


---

## 🛠️ Tech Stack

| Layer   | Technology                    |
| ------- | ----------------------------- |
| Markup  | **HTML5**                     |
| Styling | **CSS3**                      |
| Logic   | **Vanilla JavaScript (ES6+)** |
| Charts  | **Chart.js v4**               |

---

## 📂 Project Structure

```
DashBoard/
├── index.html        # Entry point
├── style.css         # Custom styles
└── app.js            # Chart.js config & DOM scripts
```

---

## ⚙️ Getting Started

1. **Clone the repo**

   ```bash
   git clone https://github.com/rasika1205/DashBoard.git
   cd DashBoard
   ```

2. **Open `index.html`**

   * Double‑click `index.html`
     *or*
   * Serve via VS Code Live Server / any static server.

No npm install or build steps required.

---

## 📈 Data Visualizations

| Chart ID   | Type        | Data Illustrated                           |
| ---------- | ----------- | ------------------------------------------ |
| `myChart`  | Line        | Monthly revenue trends (3 datasets)        |
| `myChart2` | Bar         | Online vs Offline sales (weekly)           |
| `myChart3` | Area/Line   | Page views comparison (this vs last month) |
| `myChart4` | Grouped Bar | Target vs Reality sales (YTD)              |
| `myChart5` | Pie         | Product popularity distribution            |
| `myChart6` | Scatter     | Sales outliers (value vs index)            |

All chart configurations live in **`app.js`**. Update the `data:` arrays to visualize new metrics.

---

## 🔍 Interactive Components

* **Search Product**

  * Input a product name → Displays availability message.
* **Add Product**

  * Append a new list item to the product catalog in real time.

Code reference (located in `app.js`):

```js
btn1.addEventListener("click", () => {
  // Search logic
});

btn2.addEventListener("click", () => {
  // Add item logic
});
```

---

## 📝 Future Enhancements

* **Dark / Light Theme Toggle**
* **Persist Product List** (via localStorage)
* **Animated Chart Updates** (fetch live data)
* **Modular JS** (split charts into separate modules)
* **Accessibility Improvements** (ARIA labels, keyboard nav)

---

## 📄 License

This repository is provided **for educational purposes**.

---

## 🙋‍♀️ Author

**Rasika Gautam** — [GitHub @rasika1205](https://github.com/rasika1205)

---

*Built with curiosity, caffeine, and vanilla JS.*

