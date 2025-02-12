# MCP Tools Guide

## Core Principles
1. All tools require proper <function_calls> XML syntax
2. Each tool serves a specific purpose and should be used accordingly
3. Tools can be combined for complex operations
4. Error handling and feedback are provided for each operation

## Available Tools Categories

### 1. File System Operations
```xml
<!-- File Reading -->
<function_calls>
<invoke name="read_file">
<parameter name="path">/path/to/file