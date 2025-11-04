# 部署指南

## 前提条件

1. GitHub 仓库已创建：`nicrain/AccessiLearn`
2. 本地代码已 commit 并准备 push

## 部署步骤

### 1️⃣ 推送代码到 GitHub

```bash
cd /Users/z31wang/Documents/MIASHS/Accessibilité_Numérique/pages

# 查看当前状态
git status

# 添加所有文件
git add .

# 提交更改
git commit -m "feat: 完成 AccessiLearn MVP 核心功能

- 创建 Next.js 14 项目结构
- 实现主页、模块列表、模块详情、挑战页面
- 添加交互式代码编辑器和实时预览
- 实现无障碍性自动检查功能
- 配置 GitHub Actions 自动部署
- 符合 WCAG 2.1 AA 标准"

# 推送到 main 分支
git push origin main
```

### 2️⃣ 配置 GitHub Pages

1. 访问仓库设置：https://github.com/nicrain/AccessiLearn/settings/pages

2. 在 **Source** 部分选择：
   - Source: `GitHub Actions`

3. 保存设置

### 3️⃣ 自动部署流程

推送代码后，GitHub Actions 将自动：

1. ✅ 检出代码
2. ✅ 安装 Node.js 20
3. ✅ 安装项目依赖 (`npm ci`)
4. ✅ 构建 Next.js 项目 (`npm run build`)
5. ✅ 部署到 GitHub Pages

查看部署进度：https://github.com/nicrain/AccessiLearn/actions

### 4️⃣ 访问网站

部署成功后，访问：

**https://nicrain.github.io/AccessiLearn/**

## 常见问题

### Q1: 部署失败怎么办？

**A**: 检查 Actions 日志：
1. 访问 https://github.com/nicrain/AccessiLearn/actions
2. 点击失败的工作流
3. 查看错误日志
4. 根据错误修复代码后重新 push

### Q2: 页面样式丢失？

**A**: 确认 `next.config.js` 中的 `basePath` 设置正确：
```javascript
basePath: '/AccessiLearn',  // 必须与仓库名一致
```

### Q3: 路由 404 错误？

**A**: 检查：
1. 所有链接使用 `/AccessiLearn/` 前缀
2. `next.config.js` 中 `trailingSlash: true`
3. 动态路由文件名格式正确（`[slug]/page.tsx`）

### Q4: 如何更新网站？

**A**: 修改代码后，重新 commit 并 push：
```bash
git add .
git commit -m "描述你的更改"
git push origin main
```

GitHub Actions 会自动重新部署。

## 测试清单

部署后，请测试以下功能：

- [ ] 主页加载正常
- [ ] 模块列表页显示两个模块
- [ ] 点击模块卡片可进入详情页
- [ ] 模块详情页 Markdown 渲染正常
- [ ] 点击"开始挑战"进入挑战页面
- [ ] 代码编辑器可以输入代码
- [ ] "更新预览"按钮生效
- [ ] "检查无障碍性"按钮显示反馈
- [ ] 键盘 Tab 导航顺畅
- [ ] 焦点指示器清晰可见
- [ ] 移动端响应式布局正常

## 本地测试（可选）

如果想在本地测试生产构建：

```bash
# 构建
npm run build

# 使用 http-server 预览（需要先安装）
npx http-server out -p 3000

# 访问 http://localhost:3000/AccessiLearn/
```

## 监控和维护

- **Actions 状态**: https://github.com/nicrain/AccessiLearn/actions
- **Issues**: https://github.com/nicrain/AccessiLearn/issues
- **Pull Requests**: https://github.com/nicrain/AccessiLearn/pulls

---

**祝部署顺利！** 🚀
