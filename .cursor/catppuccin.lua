return {
  "catppuccin/nvim",
  lazy = false,
  name = "catppuccin",
  priority = 1000,
  config = function()
    require("catppuccin").setup({
      color_overrides = {
        all = {
          base = "#181818",
          mantle = "#282828",
          crust = "#292929",
        },
      },
      custom_highlights = function()
        return {
          CursorLine = { bg = "#212121" },
          Comment = { fg = '#6C7086' },
          TabLine = { bg = '#212121' },
          TabLineSel = { bg = '#212122', fg = '#87afaf' },
          Pmenu = { bg = '#212121' },
          PmenuSel = { bg = '#212122', fg = '#e5c890' },
        }
      end,
    })

    vim.cmd("colorscheme catppuccin")

    vim.api.nvim_set_hl(0, "VertSplit",    { fg = "#3b3b3b", bg = "none" })      -- Vertical split line color
    vim.api.nvim_set_hl(0, "WinSeparator", { fg = "#3b3b3b", bg = "none" })      -- Window separator for newer Neovim versions
    vim.api.nvim_set_hl(0, "CursorLineNr", { fg = "#212121", bg = "#212121" })                   -- Change current line number color
    vim.api.nvim_set_hl(0, "SignColumn",   { bg = "#212121", fg = "#212121" })   -- Gutter background and foreground
    vim.api.nvim_set_hl(0, "Normal",       { bg = "#181818" })                   -- Background color for the editor
    vim.api.nvim_set_hl(0, "Visual",       { bg = "#2A2A2A" })                   -- Selection color for the editor
    vim.api.nvim_set_hl(0, "VisualNOS",    { bg = "#2A2A2A" })                   -- Selection color for the editor

    vim.api.nvim_set_hl(0, "TabLine",      { fg = "#45475b", bg = "#212121" })   -- Unselected tab color
    vim.api.nvim_set_hl(0, "TabLineSel",   { fg = "#87afaf", bg = "#212121" })   -- Selected tab color
    vim.api.nvim_set_hl(0, "TabLineFill",  { bg = "#212121" })                   -- Background behind tabs
    vim.api.nvim_set_hl(0, "QuickFix", { bg = "#212121" })
    vim.api.nvim_set_hl(0, "QuickFixLine", { bg = "#212121" })
  end,
}
