import { Box, Button, Center } from "@chakra-ui/react";
import SidebarWithHeader from "../../components/AdminNavBar/AdminNavbar";
import "./Artcle.css";
import postData from "../../../../backend/db.json";

const Article = () => {
  return (
    <div>
      <SidebarWithHeader />
      <Box h={"100vh"} ml={{ base: 0, md: 60 }} p="4">
        <CRUDComponent />
      </Box>
    </div>
  );
};

export default Article;

import React, { useState } from "react";

interface Article {
  id: number;
  title: string;
  description: string;
  source: string;
  time: number;
  articleLink: string;
  image1: string;
  image2: string;
  category: string;
  clicks: number;
}

const CreateArticleForm: React.FC<{
  onCreate: (article: Article) => void;
}> = ({ onCreate }) => {
  const [formData, setFormData] = useState<Article>({
    id: 0,
    title: "",
    description: "",
    source: "",
    time: 0,
    articleLink: "",
    image1: "",
    image2: "",
    category: "",
    clicks: 0,
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onCreate(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <label>
        Source:
        <input
          type="text"
          name="source"
          value={formData.source}
          onChange={handleChange}
        />
      </label>
      <label>
        Time:
        <input
          type="number"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
      </label>
      <label>
        Article Link:
        <input
          type="text"
          name="articleLink"
          value={formData.articleLink}
          onChange={handleChange}
        />
      </label>
      <label>
        Image 1:
        <input
          type="text"
          name="image1"
          value={formData.image1}
          onChange={handleChange}
        />
      </label>
      <label>
        Image 2:
        <input
          type="text"
          name="image2"
          value={formData.image2}
          onChange={handleChange}
        />
      </label>
      <label>
        Category:
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
      </label>
      <label>
        Clicks:
        <input
          type="number"
          name="clicks"
          value={formData.clicks}
          onChange={handleChange}
        />
      </label>
      <Center>
        <Button type="submit" colorScheme="blue">
          Create Article
        </Button>
      </Center>
    </form>
  );
};

const ItemsPerPage = 10;
const MaxPageButtons = 5;

const CRUDComponent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(postData.posts.length / ItemsPerPage);

  const startIndex = (currentPage - 1) * ItemsPerPage;
  const endIndex = startIndex + ItemsPerPage;
  const currentArticles = postData.posts.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const renderPaginationButtons = () => {
    const pageButtons = [];
    let startPage = Math.max(1, currentPage - Math.floor(MaxPageButtons / 2));
    let endPage = Math.min(totalPages, startPage + MaxPageButtons - 1);

    if (endPage - startPage + 1 < MaxPageButtons) {
      startPage = Math.max(1, endPage - MaxPageButtons + 1);
    }

    if (startPage > 1) {
      pageButtons.push(
        <Button key={1} onClick={() => handlePageChange(1)}>
          1
        </Button>,
      );
      if (startPage > 2) {
        pageButtons.push(<span key="ellipsis1">...</span>);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <Button
          key={i}
          onClick={() => handlePageChange(i)}
          className={i === currentPage ? "active" : ""}
        >
          {i}
        </Button>,
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageButtons.push(<span key="ellipsis2">...</span>);
      }
      pageButtons.push(
        <Button key={totalPages} onClick={() => handlePageChange(totalPages)}>
          {totalPages}
        </Button>,
      );
    }

    return pageButtons;
  };

  const [articles, setArticles] = useState<Article[]>([]);

  const createArticle = (article: Article) => {
    setArticles([...articles, article]);
  };

  const deleteArticle = (id: number) => {
    setArticles(articles.filter((article) => article.id !== id));
  };

  return (
    <div>
      <h1>Articles</h1>
      <CreateArticleForm onCreate={createArticle} />
      <ul>
        {currentArticles.map((article) => (
          <li key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.Description}</p>
            <Button onClick={() => deleteArticle(article.id)}>Delete</Button>
          </li>
        ))}
      </ul>
      <Center gap={1}>
        <Button
          onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        {renderPaginationButtons()}
        <Button
          onClick={() =>
            handlePageChange(Math.min(totalPages, currentPage + 1))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </Center>
    </div>
  );
};
