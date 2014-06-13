#! /usr/bin/env python

import os

from jinja2 import Environment, FileSystemLoader, Template

env = Environment(loader=FileSystemLoader('.'))

svg_examples = os.listdir('svg')
svg_examples.sort()
examples = [svg_example.replace('.svg', '') for svg_example in svg_examples]

template = env.get_template('template-index.html')
with open('index.html', 'w') as output:
  output.write(template.render(examples=examples))
