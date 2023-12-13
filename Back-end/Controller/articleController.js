// UserController.js
import { db } from "../Model/index.js";
const Article = db.Articles;
const addArticle = async (req, res) => {
  let info = {
    title: req.body.title,
    category: req.body.category,
    body: req.body.body,
    image: req.body.image,
    author: req.body.author
  };
try {
   const article = await Article.create(info);
    res.status(200).send(article);
} catch (error) {
    console.error("Error creating article:", error);
    res.status(500).send("Internal Server Error");
}}
// 2. get all Articles
const getAllArticles = async (req, res) => {
  try {
    // Fetch all articles
    let articles = await Article.findAll({ });

    // Check if there are no articles
    if (articles.length === 0) 
        {
      res.status(404).send({ message: "No articles in the database" });
      return;
        }res.status(200).send(articles);
    } catch (error) {
    console.error("Error fetching articles:", error);
    res.status(500).send(error.message);
  }
};

// 3. get single Article
const getOneArticles = async (req, res) => {
  let id = req.params.id;
  let article = await Article.findOne({
    where: { id: id },
  });
  res.status(200).send(article);
};

// 4. update ARTICLE
const updateArticle = async (req, res) => {
  let id = req.params.id;
  const article = await Article.update(req.body, { where: { id: id } });
  res.status(200).send(article);
};

// 5. delete Article
const deleteArticle = async (req, res) => {
  let id = req.params.id;
  await Article.destroy({ where: { id: id } });
  res.status(200).send("Article deleted");
};



export { addArticle, getAllArticles, getOneArticles, updateArticle, deleteArticle};
