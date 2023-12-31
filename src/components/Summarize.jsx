import { useEffect, useState } from "react";
import { copy, linkIcon, loader, tick } from "../assets";
import { useLazyGetSummaryQuery } from "../services/article.js";

const Summarize = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const [searchArticles, setSearchedArticles] = useState([]);
  const [copied, setCopied] = useState("");
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );

    if (articlesFromLocalStorage) {
      setSearchedArticles(articlesFromLocalStorage);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await getSummary({ articleUrl: article.url });

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updatedAllArticles = [newArticle, ...searchArticles];

      setArticle(newArticle);
      setSearchedArticles(updatedAllArticles);

      localStorage.setItem("articles", JSON.stringify(updatedAllArticles));

      setArticle((prevArticle) => ({ ...prevArticle, url: "" }));
    }
  };

  const handleCopy = (copyUrl) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="max-h-full flex flex-col gap-3">
        <section className="flex flex-col gap-2">
          <form
            action=""
            className="relative flex justify-center items-center"
            onSubmit={handleSubmit}
          >
            <img
              src={linkIcon}
              alt="Link_Icon"
              className="absolute my-2 left-0 ml-3 w-5"
            />
            <input
              type="url"
              placeholder="Enter a URL"
              value={article.url}
              onChange={(e) => setArticle({ ...article, url: e.target.value })}
              required
              className="url_input peer"
            />

            <button
              type="submit"
              className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
            >
              ↵
            </button>
          </form>
          <div className="flex flex-col max-h-32 overflow-y-auto">
            {searchArticles.map((item, index) => (
              <div
                key={`link-${index}`}
                onClick={() => setArticle(item)}
                className="link_card"
              >
                <div className="copy_btn" onClick={() => handleCopy(item.url)}>
                  <img
                    src={copied === item.url ? tick : copy}
                    alt="copy"
                    className="w-[40%] h-[40%] object-contain"
                  />
                </div>
                <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">
                  {item.url}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="my-3 max-w-full flex justify-center items-center">
          {isFetching ? (
            <>
              <img
                src={loader}
                alt="loader"
                className="w-20 h-20 object-contain"
              />
              <p className="font-inter font-bold text-black text-center">
                Ninja is Working!!
              </p>
            </>
          ) : error ? (
            <p className="font-inter font-bold text-black text-center">
              Well, that wasn't supposed to happen...
              <br />
              <span className="font-satoshi font-normal text-gray-700">
                {error?.data?.error}
              </span>
            </p>
          ) : (
            article.summary ? (
              <div className="flex flex-col gap-1 max-h-80 overflow-y-auto">
                <h2 className="font-satoshi font-bold text-gray-600 text-xl">
                  Article <span className="blue_gradient">Summary</span>
                </h2>
                <div className="summary_box">
                  <p className="font-inter font-medium text-sm text-gray-700">
                    {article.summary}
                  </p>
                </div>
              </div>
            ) : <p className="font-satoshi font-bold text-gray-600 text-xl">No Summaries to show yet</p>
          )}
        </div>
      </div>
  );
};

export default Summarize;
