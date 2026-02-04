#!/usr/bin/env python3
"""
Cross-platform encoding utilities for Windows compatibility.

Fixes UnicodeEncodeError on Windows by reconfiguring stdout/stderr to UTF-8
and providing encoding-aware file I/O helpers.
"""

import sys
from pathlib import Path


def configure_utf8_console():
    """
    Reconfigure stdout/stderr for UTF-8 if current encoding is not UTF-8.

    Checks actual encoding instead of platform - handles more edge cases
    (WSL, CI runners, Docker, non-UTF-8 locales on any OS).
    Uses 'replace' error handling to prevent crashes on incompatible terminals.
    """
    # Check actual encoding instead of platform - handles more edge cases
    # (WSL, CI runners, Docker, non-UTF-8 locales on any OS)
    if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
        if hasattr(sys.stdout, 'reconfigure'):
            sys.stdout.reconfigure(encoding='utf-8', errors='replace')
    if sys.stderr.encoding and sys.stderr.encoding.lower() != "utf-8":
        if hasattr(sys.stderr, 'reconfigure'):
            sys.stderr.reconfigure(encoding='utf-8', errors='replace')


def read_text_utf8(path: Path) -> str:
    """Read file with explicit UTF-8 encoding."""
    return path.read_text(encoding='utf-8')


def write_text_utf8(path: Path, content: str) -> None:
    """Write file with explicit UTF-8 encoding."""
    path.write_text(content, encoding='utf-8')
