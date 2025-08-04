window.BENCHMARK_DATA = {
  "lastUpdate": 1754318900713,
  "repoUrl": "https://github.com/shiyasmohd/ethrex",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "47506558+MegaRedHand@users.noreply.github.com",
            "name": "Tomás Grüner",
            "username": "MegaRedHand"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fb1fd37e64e6bc51ee7bdf0f5491fa401535604d",
          "message": "fix(l1): disable default request body limit on authenticated RPC (#3929)\n\n**Motivation**\n\nConsensus client calls to `engine_newPayload` sometimes failed with `413\npayload too large` HTTP errors (and sometimes `broken pipe`, which might\nbe related).\n\n**Description**\n\nThis PR solves this by disabling the request body limit, since it\ndoesn't make much sense to add a limit to authenticated requests.",
          "timestamp": "2025-08-01T23:30:19Z",
          "tree_id": "73cd781393cb7f53596e34b4ef6a27bc203b2e20",
          "url": "https://github.com/shiyasmohd/ethrex/commit/fb1fd37e64e6bc51ee7bdf0f5491fa401535604d"
        },
        "date": 1754318898953,
        "tool": "cargo",
        "benches": [
          {
            "name": "Block import/Block import ERC20 transfers",
            "value": 165142559979,
            "range": "± 1335012816",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}