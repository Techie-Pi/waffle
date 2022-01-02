# Library Spec
This document is a checklist with all the features a library is expected to have in order to fully implement Waffle
-aka ``domains.yaml``-

## Parsing capabilities
- [ ] Support for parsing local files
- [ ] Support for parsing remote files
  - [ ] Support for hash check

## Data support
- [ ] Version
  - [ ] Version checking
- [ ] Domain set
  - [ ] Multiple domain sets support
- [ ] Metadata
- [ ] Domains
  - [ ] Domain (host)
  - [ ] Domain (host + wildcard)
  - [ ] Type
  - [ ] Ring

## High-level API
- [ ] Check multiple rings
  - [ ] Check if is deprecated
  - [ ] Check if is disabled or removed
  - [ ] Check if it is landing
  - [ ] Check if it is a service
  - [ ] Check if it is user content
  - [ ] Check if it is a proxy

<sub>Version from _02-01-2022_<sub>
