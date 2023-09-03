const express = require("express");

const router = express.Router();

const blogController = require("../controllers/blogController");
const blogDetailsController = require("../controllers/blogDetailsController");
const commentController = require("../controllers/commentController");
const messageController = require("../controllers/messageController");
const portfolioController = require("../controllers/portfolioController");
const productController = require("../controllers/productController");
const profitController = require("../controllers/profitController");
const projectController = require("../controllers/projectController");
const serviceController = require("../controllers/serviceController");
const titleController = require("../controllers/titleController");

//blogRoutes
router.get("/getBlog", blogController.readBlog);
router.post("/createBlog", blogController.createBlog);
router.put("/updateBlog", blogController.updateBlog);
router.delete("/deleteBlog", blogController.deleteBlog);

//blogDetailsRoutes
router.get("/getBlogDetails", blogDetailsController.readBlogDetails);
router.post("/createBlogDetails", blogDetailsController.createBlogDetails);
router.put("/updateBlogDetails", blogDetailsController.updateBlogDetails);
router.delete("/deleteBlogDetails", blogDetailsController.deleteBlogDetails);

//commentRoutes
router.get("/getComment", commentController.readComment);
router.post("/createComment", commentController.createComment);
router.put("/updateComment", commentController.updateComment);
router.delete("/deleteComment", commentController.deleteComment);

//messageRoutes
router.get("/getMessage", messageController.readMessage);
router.post("/createMessage", messageController.createMessage);
router.put("/updateMessage", messageController.updateMessage);
router.delete("/deleteMessage", messageController.deleteMessage);

//portfolioRoutes
router.get("/getPortfolio", portfolioController.readPortfolio);
router.post("/createPortfolio", portfolioController.createPortfolio);
router.put("/updatePortfolio", portfolioController.updatePortfolio);
router.delete("/deletePortfolio", portfolioController.deletePortfolio);

//productRoutes
router.get("/getProduct", productController.readProduct);
router.post("/createProduct", productController.createProduct);
router.put("/updateProduct", productController.updateProduct);
router.delete("/deleteProduct", productController.deleteProduct);

//profitRoutes
router.get("/getProfit", profitController.readProfit);
router.post("/createProfit", profitController.createProfit);
router.put("/updateProfit", profitController.updateProfit);
router.delete("/deleteProfit", profitController.deleteProfit);

//projectRoutes
router.get("/getProject", projectController.readProject);
router.post("/createProject", projectController.createProject);
router.put("/updateProject", projectController.updateProject);
router.delete("/deleteProject", projectController.deleteProject);

//serviceRoutes
router.get("/getService", serviceController.readService);
router.post("/createService", serviceController.createService);
router.put("/updateService", serviceController.updateService);
router.delete("/deleteService", serviceController.deleteService);

//titleRoutes
router.get("/getTitle", titleController.readTitle);
router.post("/createTitle", titleController.createTitle);
router.put("/updateTitle", titleController.updateTitle);
router.delete("/deleteTitle", titleController.deleteTitle);

module.exports = router;
