import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      //GitHub: "https://github.com/jackyzha0/quartz",
      //"Discord Community": "https://discord.gg/cRFFHYye7t",
      "YouTube, English": "https://www.youtube.com/@Theology-101",
      "|":"#",
      "YouTube, Español": "https://www.youtube.com/@teologia101",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    // Component.ArticleTitle(),
    // Component.ContentMeta(),
    // Component.TagList(),
  ],
  afterBody: [
      Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
        title: "Sections",
        folderClickBehavior: "collapse", // what happens when you click a folder
        folderDefaultState: "collapsed", // default state of folders ("collapsed" or "open")
    }),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
      Component.Breadcrumbs(),
      Component.ArticleTitle(),
      Component.ContentMeta()
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({
        title: "Sections",
        folderClickBehavior: "collapse", // what happens when you click a folder
        folderDefaultState: "collapsed", // default state of folders ("collapsed" or "open")
    }),
  ],
  right: [],
}
