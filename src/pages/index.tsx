import React from "react";
import Layout from "../components/Layout";
import Transformer from "../components/Transformer";
import SEO from "../components/SEO";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <h2>What is this?</h2>
    <p>
      I used{" "}
      <a href="http://batterseapower.github.io/pinyin-toolkit/" target="_blank">
        Pinyin Toolkit
      </a>{" "}
      for entering Chinese characters into Anki back in Anki 2.x. However, this
      plugin hasn't been updated for Anki 2.1, and Anki disabled all support for
      syncing with Anki 2.0 in February 2020. So, now I'm stuck and can't input
      any new Chinese characters into my Chinese Anki deck since I can't get the
      pinyin tone styles to match what's output by Pinyin Toolkit.
    </p>
    <p>
      This site is a hacky way around this, by allowing me to manually type
      pinyin like <b>ni3hao3</b>, and have it output proper Anki-compatible HTML
      that matches what the old Pinyin Toolkit would have output. This is just a
      stopgap until I find a better solution, but if anyone else is in my same
      situation, feel free to use this tool too!
    </p>

    <div
      style={{
        padding: "20px",
        border: "1px solid #BBB",
        borderRadius: "4px",
        margin: "20px 0 50px",
      }}
    >
      <Transformer />
    </div>
  </Layout>
);

export default IndexPage;
