import React from "react";
import { Meta } from "@storybook/react";

export default {
  title: "Introduction",
} as Meta;

export const Introduction = () => (
  <div
    style={{
      fontFamily: "'Helvetica, Arial, sans-serif'",
      lineHeight: "1.6",
      color: "#000",
    }}
  >
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ borderBottom: "2px solid #ccc", paddingBottom: "10px" }}>
        Introduction to `tribe-api-wrapper`
      </h1>

      <section>
        <h2>Features</h2>
        <ul style={{ paddingLeft: "40px", listStyleType: "circle" }}>
          <li>
            Comprehensive React components for leaderboards, client cards, user
            lists, and more.
          </li>
          <li>Intuitive functions for interacting with Tribe API endpoints.</li>
          <li>Customizable styling for tailored user experiences.</li>
          <li>Robust TypeScript support for enhanced code quality.</li>
        </ul>
      </section>

      <section>
        <h2>Installation</h2>
        <pre
          style={{
            background: "#f5f5f5",
            padding: "10px",
            borderRadius: "5px",
            fontFamily: "monospace",
            color: "#333",
          }}
        >
          npm install tribe-api-wrapper
        </pre>
      </section>

      <section>
        <h2>Usage</h2>
        <p>
          Utilize either pre-made React components or direct functions to
          interact with the Tribe API as per your requirements.
        </p>
      </section>

      <h2>Components</h2>
      <ul style={{ paddingLeft: "40px", listStyleType: "circle" }}>
        <li>ClientProfile</li>
        <li>ClientCardLG</li>
        <li>ClientCardSM</li>
        <li>ClientList</li>
        <li>Leaderboard</li>
        <li>UserList</li>
      </ul>

      <h2>Links</h2>
      <ul style={{ paddingLeft: "40px", listStyleType: "circle" }}>
        <li>
          <a
            href="https://www.npmjs.com/package/tribe-api-wrapper"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#007bf5" }}
          >
            View NPM Package
          </a>
        </li>
        <li>
          <a
            href="https://github.com/BankkRoll/tribe-api-wrapper"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#007bf5" }}
          >
            View GitHub
          </a>
        </li>
        <li>
          <a
            href="https://x.com/bankkroll_eth"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#007bf5" }}
          >
            BankkRoll on Twitter
          </a>
        </li>
      </ul>

      <section>
        <h2>Disclaimer</h2>
        <p>
          Note: This library was independently developed by{" "}
          <a
            href="https://x.com/bankkroll_eth"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#007bff" }}
          >
            BankkRoll
          </a>{" "}
          and is neither associated with nor endorsed by
          <a
            href="https://mytriberewards.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#007bf5" }}
          >
            {" "}
            Tribe
          </a>
          . It adheres to ethical usage and complies with Tribe's terms of
          service.
        </p>
      </section>
    </div>
  </div>
);

Introduction.storyName = "Introduction";
